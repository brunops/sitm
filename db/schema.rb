# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131020201243) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: true do |t|
    t.integer "product_id"
    t.text    "img_link"
  end

  create_table "product_priorities", force: true do |t|
    t.integer  "product_id"
    t.string   "asin"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "products", force: true do |t|
    t.text     "large_image"
    t.string   "title"
    t.string   "price"
    t.string   "brand"
    t.text     "buylink"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "asin"
    t.text     "small_image"
    t.text     "medium_image"
    t.text     "asins_of_sim_prods"
    t.string   "department"
  end

  create_table "similars", force: true do |t|
    t.integer "similarprod_id"
    t.integer "product_id"
  end

  create_table "simple_sessions", force: true do |t|
    t.string   "session_key"
    t.text     "value"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
