class CreateApartments < ActiveRecord::Migration[7.0]
  def change
    create_table :apartments do |t|
      t.string :location
      t.integer :rent
      t.integer :num_of_bedrooms
      t.integer :num_of_bathrooms
      t.integer :user_id
      t.integer :type_id
      t.string :image_url

      t.timestamps
    end
  end
end
