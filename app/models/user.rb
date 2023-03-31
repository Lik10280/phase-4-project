class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :age, numericality: {minimum: 18}
    has_many :apartments
    has_many :types, through: :apartments
    has_many :bookings
end
