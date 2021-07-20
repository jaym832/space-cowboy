Rails.application.routes.draw do
  
  # log in
  post "/login", to: "sessions#create"
  # log out
  delete "/logout", to: "sessions#destroy"

  # create user
  post "/newuser", to: "users#create"
  # show current user
  get "/me", to: "users#show"
  # delete user
  delete "/deleteuser/:id", to: "users#delete"
  # create/post scores
  post "/score", to: "scores#create"
  # get highscores
  # get "/score", to: "scores#highscores"
  # show all scores
  get "/score", to: "scores#index"
  # show personal scores
  get "/score/:id", to: "scores#show"
  #deletes individual scores
  delete '/deletescore/:id', to: 'scores#delete'


  
  # sessions to stay logged in


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
