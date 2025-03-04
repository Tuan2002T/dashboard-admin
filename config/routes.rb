Rails.application.routes.draw do
  resources :products, only: [:index] do
    collection do
      get :favorites
    end
  end

  resources :order_lists, only: [:index]

  resources :product_stocks, only: [:index]

  resources :pricings, only: [:index]

  resources :calenders, only: [:index]

  resources :to_dos, only: [:index]

  resources :contacts, only: [:index]

  resources :invoices, only: [:index]

  resources :teams, only: [:index]
  
  devise_for :admins
  
  mount_devise_token_auth_for 'User', at: 'api/v1/auth', controllers: {
    sessions: 'api/v1/auth/sessions',
    registrations: 'api/v1/auth/registrations'
  }
  root to: 'dashboard#index'
end
