class Contact < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :nickname,  :captcha  => true

  def headers
    {
      :subject => "Paubox Request from #{name} at #{email}",
      :to => "getstarted@paubox.com",
      :from => "getstarted@paubox.com"
    }
  end
end
