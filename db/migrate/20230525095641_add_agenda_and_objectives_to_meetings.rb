class AddAgendaAndObjectivesToMeetings < ActiveRecord::Migration[7.0]
  def change
    add_column :meetings, :agenda, :text
    add_column :meetings, :objectives, :text
  end
end
