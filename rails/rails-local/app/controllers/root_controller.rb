class RootController < ApplicationController
  def index

    controller_names = Dir[Rails.root.join('app/controllers/*_controller.rb')].reduce([]) do |memo,path|

      path.match(/(\w+_controller).rb/)
      memo << $1 if !$1.nil? and $1 != 'root_controller' and $1 != 'application_controller'
      
      memo
    end

    logger.info "cont names: #{controller_names }"

    @resources = controller_names.map do |resource_name|
      {
        name: resource_name.gsub(/_controller/,'').gsub(/_/,' ').split(' ').map(&:capitalize).join(' '),
        path: "/" + resource_name + "/",
        controller: resource_name.classify.constantize,
        model: resource_name.gsub(/_controller/,'').classify.constantize,
        count: resource_name.gsub(/_controller/,'').classify.constantize.count
      }
    end

  end
end
