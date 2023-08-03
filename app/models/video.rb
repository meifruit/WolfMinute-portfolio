class Video < ApplicationRecord
  has_many :meetings
  has_one_attached :audio
end
