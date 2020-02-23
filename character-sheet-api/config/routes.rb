Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :characters
      resources :spells, only [:create, :update, :destroy]
      resources :attacks, only [:create, :update, :destroy]
      resources :equipment, only [:create, :update, :destroy]
    end
  end
end
