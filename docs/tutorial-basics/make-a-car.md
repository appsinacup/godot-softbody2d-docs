---
sidebar_position: 3
---

# Move a Softbody Car

A Car Softbody is formed of 2 Softbodies that act as the wheels, and a Rigidbody that connects the two with 2 Pin Joints with Motor. This tutorial is also available in the GitHub repo as a sample [samples/softbody2d/car-demo](https://github.com/appsinacup/godot-softbody2d/tree/main/samples/softbody2d/car-demo).

## Create two new SoftBody2D nodes

Similar as previous tutorial, create two Softbody and add the texture `samples/softbody2d/Boiled_Egg_Half.png` to them. Move them a bit apart. You should see in the **2D scene view** the following:

![scene view](/img/make-a-car/scene-view.png)

Name them **Wheel 1** and **Wheel 2**.

## Create a World Boundary

Create a **RigidBody2D** and add as child a **CollisionShape2D** with **Shape** set to **WorldBoundaryShape2D** and move it below the Softbodies.

## Create a RigidBody2D node

Create a **RigidBody2D** node with:
- a **CollisionShape2D** with a **RectangleShape2D**

![rectangle](/img/make-a-car/rectangle.png)

- two **PinJoint2D** nodes placed on the center of the wheels
- a **Polygon2D** node with the points drawn along the contour of the rectangle shape.

You should now have the following car:

![car](/img/make-a-car/car.png)

Now connect the pinjoints **Node A** to the big rectangle Rigidbody, and the **Node B** to the corresponding Rigidbody from each Softbody:

- **Node B** for first pinjoint: `../../Wheel 1/Bone-15`
- **Node B** for second pinjoint: `../../Wheel 2/Bone-15`

Next, go to the big rectangle Rigidbody and set it's `z_index` to -1 so it's behind the wheels:

![behind](/img/make-a-car/behind.png)

Next, add the following **Script** on the big rectangle Rigidbody:

```js
extends RigidBody2D

@onready var pin1 : PinJoint2D = $PinJoint2D
@onready var pin2 : PinJoint2D = $PinJoint2D2

const SPEED = 6000

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _physics_process(delta: float) -> void:
    var direction := Input.get_axis("ui_left", "ui_right")
    if direction:
        pin1.motor_enabled = true
        pin2.motor_enabled = true
        pin1.motor_target_velocity = -direction * SPEED
        pin2.motor_target_velocity = -direction * SPEED
    else:
        pin1.motor_enabled = false
        pin2.motor_enabled = false

```

## Try it out

Click the **Run Current Scene** button. If you did everything right, you will see the following:

![gif](/img/make-a-car/result.gif)
