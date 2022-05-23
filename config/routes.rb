Rails.application.routes.draw do
  resources :organizer_comments
  resources :user_comments
  resources :signups
  resources :town_events
  resources :users
  resources :organizers

  get '/me', to: 'application#user_or_organizer'

  get '/users', to: 'users#index'

  post '/user_login', to: 'sessions#create'

  post '/organizer_login', to: 'sessions#organizer_create'

  delete '/logout', to: 'sessions#delete'
  
end
