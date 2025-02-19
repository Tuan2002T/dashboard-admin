require "test_helper"

class OrderListsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get order_lists_index_url
    assert_response :success
  end
end
