class Book < ActiveRecord::Base
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks
  searchkick autocomplete: ['title']
  validates_presence_of :title, :description, :image_url
end
