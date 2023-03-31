class BookingsController < ApplicationController
    def new
      @booking = Booking.new
    end
  
    def create
      @booking = Booking.new(booking_params)
      if @booking.save
        redirect_to @booking
      else
        render 'new'
      end
    end
  
    private
  
    def booking_params
      params.require(:booking).permit(:check_in, :check_out, :user_id, :apartment_id)
    end
  end
  