require "test_helper"

class VideoControllerTest < ActionDispatch::IntegrationTest
  test "should get screenshare" do
    get video_screenshare_url
    assert_response :success
  end

  test "should get name" do
    get video_name_url
    assert_response :success
  end
end
