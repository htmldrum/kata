class StoreController < ApplicationController
  include CurrentCart
  before_action :set_cart
  def index
    if session[:index_count]
      session[:index_count] += 1
    else
      session[:index_count] = 1
    end
    @products = Product.order(:title)
  end
end
