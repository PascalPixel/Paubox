class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # Contact form on all pages
  before_action :set_contact
  def set_contact
    @contact = Contact.new
  end
end
