class Api::V1::Auth::SessionsController < DeviseTokenAuth::SessionsController
  def render_create_success
    auth_headers = @resource.create_new_auth_token
    @resource.save!

    render json: {
      data: resource_data(resource_json: @resource),
      auth_headers: auth_headers
    }
  end
end
