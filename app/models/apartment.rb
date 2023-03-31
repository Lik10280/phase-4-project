class Apartment < ApplicationRecord
    validates :location, presence: true
    validates :rent, numericality: {minimum: 0}
    belongs_to :user
    belongs_to :type
    has_many :bookings
end
