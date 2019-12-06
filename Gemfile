source 'https://rubygems.org'

# Bundler
gem 'bundler', '>= 1.8.4'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0'
# Use postgres as the database for Active Record
gem 'pg', '~> 0.18.4'
# Use Puma as the app server
gem 'puma', '~> 3.12.2'
# Use HAML for HTML content
gem 'haml-rails', '~> 0.9.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0.4'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '~> 3.0.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2.1'

# Use jquery as the JavaScript library
gem 'jquery-rails', '~> 4.2.1'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5.0.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.6.0'

# Mail forms
gem 'mail_form', github: 'plataformatec/mail_form', branch: 'master'
# Easier to manage forms
gem 'simple_form', '~> 3.2.1'
# Email through Postmark
gem 'postmark-rails', '~> 0.13.0'

# Bootstrap 4 for layout
gem 'bootstrap', '~> 4.0.0.alpha5'

# Synthax highlighting
gem 'haml-coderay', '~> 0.2.0'

# Users
gem 'devise', '~> 4.2.0'

source 'https://rails-assets.org' do
  # Needed for Bootstrap 4 Tooltips and Popovers
  gem 'rails-assets-tether', '>= 1.1.0'
  # Beautiful Select dropdowns
  gem 'rails-assets-chosen', '~> 1.6.2'
  # CSS animations
  gem 'rails-assets-animate.css', '~> 3.5.2'
  # Animated live charts
  gem 'rails-assets-chartjs', '~> 2.3.0'
  # Trigger JS functions if element is in viewport
  gem 'rails-assets-jquery-visible', '~> 1.2.0'
  # Super fast animation with JS
  gem 'rails-assets-velocity', '~> 1.3.1'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Heroku gem
group :production do
  gem 'rails_12factor'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Ruby version
ruby '2.3.1'
