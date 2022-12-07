Rails.application.routes.draw do
  resources :organizer_comments
  resources :user_comments
  resources :signups
  resources :town_events
  resources :users
  resources :organizers


  get '/dummy-route/:id', to: 'organizer_comments#show'

  get '/logged_in', to: 'application#user_or_organizer'

  get '/users', to: 'users#index'

  get '/town_events', to: 'town_events#index'

  get '/town_events/:id', to:'town_events#show' 

  get '/more-info/:event_id', to:'user_comments#show'

  # get 'more-info/town_events', to: 'town_events#index'

  get '/town_event_page', to: 'organizers#show'

  get '/user_comments', to: 'user_comments#index'

  post '/signup', to: 'users#create'

  post '/user_login', to: 'sessions#create'

  post '/organizer_login', to: 'sessions#organizer_create'

  post 'event_rsvp', to: 'signups#create'

  post '/organize_event', to: 'town_events#create'

  post '/event_rsvp', to: 'signups#create'
  
  post 'event_rsvp', to: 'signups#create'

  post 'event_comments', to: 'user_comments#create'

  post '/organizer-event-comments', to: 'organizer_comments#create'

  post '/organizer-avatar', to: 'organizer#avatar_upload'

  patch '/organize_event/:event_id', to: 'town_events#update'

  delete '/logout', to: 'sessions#destroy'

  delete '/my_event/:event_id', to: 'town_events#destroy'

  delete 'event_rsvp/:town_event_id', to: 'signups#destroy'
  
end
