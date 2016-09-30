class Contact < MailForm::Base
  attribute :first_name
  attribute :last_name
  attribute :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :phone
  attribute :title
  attribute :company
  attribute :number_of_employees
  attribute :nickname, captcha: true

  validates :first_name, presence: true
  validates :last_name, presence: true

  def headers
    {
      :subject => "Paubox Request #{email}",
      :to => "getstarted@paubox.com",
      :from => "getstarted@paubox.com"
    }
  end
end
