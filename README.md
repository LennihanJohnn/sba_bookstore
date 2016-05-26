# SBA Bookstore: https://tranquil-wildwood-84708.herokuapp.com/

- rails new sba_bookstore

*init*

- rails g scaffold Book title description:text image_url

*book scaffold, partials*

- bundle

*bootstrap, font-awesome and basic layout & styles*

- bundle
- rake searchkick:reindex CLASS=Book

*searchkick and searchable models*

- bundle
- Ctrl + Shift + R browser for app/assets

*typeahead autocompletion*

*added font-awesome icon to search bar*

- bundle --without production
- heroku create
- git push heroku master
- heroku run rake db:migrate
- heroku open

*heroku ready*
