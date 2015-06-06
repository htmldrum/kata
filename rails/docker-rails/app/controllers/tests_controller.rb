class TestsController < ApplicationController

  before_action :set_test, only: [:show,:edit,:update,:destroy]

  def index
    @tests = Test.all
  end

  private

  def set_test
    @test = Test.find(params[:id])
  end

end
