Rails.application.routes.draw do
  resources :organizer_comments
  resources :user_comments
  resources :signups
  resources :town_events
  resources :users
  resources :organizers

  get '/me', to: 'application#user_or_organizer'

  get '/users', to: 'users#index'

  get '/town_events', to: 'town_events#index'

  get '/town_event_page', to: 'organizers#show'

  post '/signup', to: 'users#create'

  post '/user_login', to: 'sessions#create'

  post '/organizer_login', to: 'sessions#organizer_create'

  post 'event_rsvp', to: 'signups#create'

  post '/organize_event', to: 'town_events#create'

  post '/event_rsvp', to: 'signups#create'
  
  post 'event_rsvp', to: 'signups#create'

  put '/organize_event/:event_id', to: 'town_events#update'

  delete '/logout', to: 'sessions#delete'

  delete '/my_event/:event_id', to: 'town_events#delete'

  delete 'event_rsvp/:town_event_id', to: 'signups#delete'
  
end
