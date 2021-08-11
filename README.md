# README

Test App that uses Ruby on Rails and React and is deployed automatically to Heroku

## Dev Installation

### Prerequisites
- Ruby 3.0.2
- Node v12.18.3
- MySQL 8.0.26

### Steps
- Install the gems with `bundle install`
- Install node packages with `yarn install`
- Database acces by default will try to use `root` as username and password, we can set `RAILS_REACT_APP_DEV_DATABASE_USERNAME` and `RAILS_REACT_APP_DEV_DATABASE_PASSWORD` to change that
- Create and migrate test database with `bundle exec rake db:create && bundle exec rake db:migrate`
- Run webpack dev server with `./bin/webpack-dev-server`
- Run rails server with `bundle exec rails s`

App will be available on `localhost:3000`

## Deployment info

App is deployed automatically to Heroku everytime there is a merge to `master` branch and the pipelines succeed.

You can access the app [here]([here](https://jd-rails-react-app.herokuapp.com/))