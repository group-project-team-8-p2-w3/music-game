<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <h2>List Rooms</h2>
      <form class="form-inline">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
      </form>
    </nav>

    <div class="container">
      <div class="row" style="margin-top: 10px;">
        <div class="col">
          <img src="https://i.pinimg.com/originals/69/f8/5a/69f85a1ad617f2242d5f17e3e36c6256.jpg" alt="" style="width: 400px;">
        </div>
        <div class="col">
          <div class="d-flex justify-content-end">
            <button class="btn btn-primary">Add Room</button>

          </div>
          <div style="margin-top: 10px;">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">RoomId</th>
                  <th scope="col">Name</th>
                  <th scope="col">Player In</th>
                  <th scope="col">Playing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>3</td>
                  <td>
                    <button class="btn btn-success">Join</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>1</td>
                  <td>
                    <button class="btn btn-success">Join</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>2</td>
                  <td>
                    <button class="btn btn-success">Join</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style>

</style>
