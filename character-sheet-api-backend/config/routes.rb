Rails.application.routes.draw do
  resources :spells
  resources :attacks
  resources :equipment
  resources :characters
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
