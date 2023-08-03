class BookingsController < ApplicationController
  def edit
    @booking = Booking.find(params[:id])
    authorize @booking
  end

  def update
    @booking = Booking.find(params[:id])
    authorize @booking
    if @booking.update(booking_params)
      redirect_to meetings__path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    authorize @booking
    @booking.destroy
    redirect_to meetings_path
  end

  private

  def bookings_params
    params.require(:booking).permit(:user_id, :meeting_id)
  end
end
