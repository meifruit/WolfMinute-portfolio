class MessagesController < ApplicationController
  def create
    @meeting = Meeting.find(params[:meeting_id])
    @message = Message.new(message_params)
    @message.meeting = @meeting
    @message.user = current_user
    authorize @message

    if @message.save
      MeetingChannel.broadcast_to(
        @meeting,
        render_to_string(partial: "message", locals: {message: @message})
      )
      head :ok
    else
      render "meetings/show", status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
