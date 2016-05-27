# SBA Bookstore

### https://sba-bookstore.herokuapp.com/

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
- heroku run rake db:migrate *(fails)*

*heroku ready*

- git push heroku master
- heroku run rake db:migrate
- go install elasticbox before seeding
- heroku run rake db:seed *(fails)*

*oops forget about mysql and heroku crashes when sqllite is detected*

- heroku run rake db:seed *(works)*
- heroku open *(fails, expecting local elasticsearch)*
- heroku addons:create bonsai
- heroku config:set ELASTICSEARCH_URL=`heroku config:get BONSAI_URL`
- heroku run rake searchkick:reindex CLASS=Book

*oops setup bonsai for Heroku*

- git remote set-url heroku https://git.heroku.com/sba-bookstore.git

*rename heroku repository*

- bundle

*styling it up!*

*ajax searching*
