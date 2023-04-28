class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def current_user
    User.find_by(id: session[:user_id])
  end

  def login_user(user)
    session[:user_id] = user.id
  end

  private 

  def nil_replace
      self.attributes.each do |attr, value|
        self[attr] = '' if value.nil?
    end
  end

  def render_unprocessable_entity_response(invalid)
    # byebug
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
