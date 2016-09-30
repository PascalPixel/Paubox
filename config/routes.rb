Rails.application.routes.draw do
  # Root
  root to: "welcomes#home"

  # Contact
  resources :contacts

  # Solutions
  get "solutions", to: "welcomes#solutions"
  get "solutions/encrypted-email", to: "welcomes#encrypted_email"
  get "solutions/encrypted-form", to: "welcomes#encrypted_form"
  get "solutions/branded-storage", to: "welcomes#branded_storage"
  get "solutions/email-api", to: "welcomes#email_api"

  get "hipaa-compliance", to: "welcomes#hipaa"
  get "partners", to: "welcomes#partners"
  get "customers", to: "welcomes#customers"
  get "security", to: "welcomes#security"
  get "terms", to: "welcomes#terms"
  get "team", to: "welcomes#team"
  get "jobs", to: "welcomes#jobs"

  # Contact form
  get "contact", to: "contacts#new"
  resources :contacts, only: [:new, :create]

  # Reroute bad links to home
  get "*path", to: "welcomes#error"
end
