class Article < ApplicationRecord
  include Bootsy::Container

  has_many :image_galleries, as: :bootsy_resource, class_name: 'Bootsy::ImageGallery'

  validates :title, presence: true, length: { minimum: 3 }
  validates :body, presence: true

  extend FriendlyId
  friendly_id :title, use: :slugged
end
