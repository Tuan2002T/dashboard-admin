Rails.application.routes.draw do
  get "dashboard/index"
  devise_for :admins
  mount_devise_token_auth_for 'User', at: 'api/v1/auth', controllers: {
    sessions: 'api/v1/auth/sessions',
    registrations: 'api/v1/auth/registrations'
  }
  root to: 'dashboard#index'
end
