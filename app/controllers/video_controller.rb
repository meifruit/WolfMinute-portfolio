require 'opentok'
class VideoController < ApplicationController
  before_action :set_opentok_vars
  skip_after_action :verify_authorized
  skip_after_action :verify_policy_scoped


  def party
    @meeting = Meeting.find(params[:meeting_id])
    @message = Message.new
    @agendas = @meeting.objectives.scan(/(\d{2}:\d{2}) to \d{2}:\d{2} - (.*?) \(\d+ minutes\)/)
    @start_time = @meeting.start_date - 9.hours
  end

  def name
    redirect_to meeting_party_url(@meeting)
  end

  def screenshare
    @darkmode = 'dark'
  end

  private

  def set_opentok_vars
    @api_key = ENV['OPENTOK_API_KEY']
    @api_secret = ENV['OPENTOK_API_SECRET']
    @session_id = Session.create_or_load_session_id
    @moderator_name = ENV['MODERATOR_NAME']
    @meeting = Meeting.find(params[:meeting_id])
    if @meeting.video.nil?
    @video = Video.create
    @meeting.video = @video
    @meeting.save
    else
      @video = @meeting.video
    end
    @name ||= @meeting.title
    @token = Session.create_token(@name, @moderator_name, @session_id)
  end

  def name_params
    params.permit(:name, :password, :authenticity_token, :commit)
  end
end
