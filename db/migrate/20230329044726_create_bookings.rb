class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.datetime :check_in
      t.datetime :check_out
      t.integer :user_id
      t.integer :apartment_id

      t.timestamps
    end
  end
end
