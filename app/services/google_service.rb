require "google/cloud/speech/v1"
class GoogleService
  def transcript(audio)
    audio_file = URI.open(audio)
    google_text_obj = speech_to_text(audio_file)
    text = google_text_obj.first.alternatives.first.transcript
  end

  private

  def speech_to_text(audio_file)
    credentials = JSON.parse(File.read('credentials.json'))
    client = ::Google::Cloud::Speech::V1::Speech::Client.new do |config|
    config.credentials = credentials
    end

    config = {
      language_code: 'en-US',
      enable_automatic_punctuation: true
    }

    audio = { content: audio_file.read }
    puts "Operation started"
    response = client.recognize(config: config, audio: audio)
    results = response.results
    return results
  end
end
