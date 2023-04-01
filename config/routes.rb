Rails.application.routes.draw do
  resources :weblinks
  resources :blogs
  resources :comments
  resources :services
  resources :users
  resources :user_services
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "/me", to: "users#show"
  get "/healers", to: "users#healers"
  post "/signup", to: "users#create"
  post "/users/update_avatar", to: "users#update_avatar"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Defines the root path route ("/")
  # root "articles#index"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
