class Book < ActiveRecord::Base
  searchkick autocomplete: ['title']
end
