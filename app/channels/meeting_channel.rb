class MeetingChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    meeting = Meeting.find(params[:id])
    stream_for meeting
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
