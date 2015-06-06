Rails.application.routes.draw do

  resources :employees
  resources :coffee_shops

  root 'root#index'

end
