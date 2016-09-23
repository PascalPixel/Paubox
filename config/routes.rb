Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Root
  root to: "welcomes#home"

  # Products
  get "products", to: "welcomes#products"
  namespace :products do
    get "encrypted-email", to: "welcomes#encrypted_email"
    get "encrypted-form", to: "welcomes#encrypted_form"
    get "branded-storage", to: "welcomes#branded_storage"
    get "email-api", to: "welcomes#email_api"
  end

  get "partners", to: "welcomes#partners"
  get "customers", to: "welcomes#customers"
  get "hipaa-compliance", to: "welcomes#hipaa_compliance"
  get "security", to: "welcomes#security"
  get "terms", to: "welcomes#terms"
  get "team", to: "welcomes#team"

  get "jobs", to: "welcomes#jobs"

  # Reroute bad links to home
  get "*path", to: "welcomes#home"
end
