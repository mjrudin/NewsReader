class ChangeTable3 < ActiveRecord::Migration
  def change
    change_column :entries, :published_at, :text, :null => true
  end

end
