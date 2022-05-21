Rails.application.routes.draw do
  resources :organizer_comments
  resources :user_comments
  resources :signups
  resources :town_events
  resources :users
  resources :organizers

  get '/hello', to: 'application#hello_world'

  get '/users', to: 'users#index'
  
end
