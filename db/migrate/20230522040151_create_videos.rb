class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.datetime :start_date
      t.string :duration
      t.text :transcript
      t.text :summary
      t.text :actions

      t.timestamps
    end
  end
end
