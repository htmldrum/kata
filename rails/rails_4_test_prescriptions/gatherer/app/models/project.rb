class Project

  attr_accessor :tasks

  def initialize
    @tasks = []
  end

  def done?
    tasks.empty? # vs @tasks.empty? doesnt call task accessor
  end

end
