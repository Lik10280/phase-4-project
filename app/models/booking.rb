class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :apartment
  
    validates :check_in, presence: true
    validates :check_out, presence: true
    validates :user_id, presence: true
    validates :apartment_id, presence: true
  end
  