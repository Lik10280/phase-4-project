Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  resources :types, only: [:create, :index]

  resources :users, only: [:create, :show]
  resources :apartments
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
