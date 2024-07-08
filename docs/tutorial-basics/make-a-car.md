---
sidebar_position: 3
---

# Move a Softbody Car

A Car Softbody is formed of 2 Softbodies that act as the wheels, and a Softbody for the car frame that connects the two with 2 Pin Joints with Motor. This tutorial is also available in the GitHub repo as a sample [samples/softbody2d/car-demo](https://github.com/appsinacup/godot-softbody2d/tree/main/samples/softbody2d/car-demo).

## Create two new SoftBody2D wheel nodes

Similar as previous tutorial, create two Softbody and add the texture `samples/softbody2d/Boiled_Egg_Half.png` to them. Move them a bit apart. You should see in the **2D scene view** the following:

![scene view](/img/make-a-car/scene-view.png)

Name them **Wheel 1** and **Wheel 2**.

## Create a World Boundary

Create a **RigidBody2D** and add as child a **CollisionShape2D** with **Shape** set to **WorldBoundaryShape2D** and move it below the Softbodies.

## Create a SoftBody2D frame node

Create a Softbody and add the texture `samples/softbody2d/softbody2d_banner.jpg` to them. Rename it to **Frame**. Scale it to **0.4** for both X and Y at the **Transform** property. Move it a bit on top of the two wheels. You should see in the **2D scene view** the following:

![rectangle](/img/make-a-car/rectangle.png)

## Create the PinJoint2D nodes

Create two **PinJoint2D** nodes placed on the center of the wheels.

You should now have the following car:

![car](/img/make-a-car/car.png)

Now connect the pinjoints **Node B** to the Rigidbody closest on the **Frame** Softbody, and the **Node A** to the corresponding Rigidbody from each **Wheel** Softbody. Eg. for me the following were set:


- **Node A** for first pinjoint: `../../Wheel 1/Bone-15`
- **Node B** for first pinjoint: `../Frame/Bone4`

- **Node A** for second pinjoint: `../../Wheel 2/Bone-15`
- **Node B** for first pinjoint: `../Frame/Bone44`

Next, go to the **Frame** Softbody and set it's `z_index` to -1 so it's behind the wheels:

![behind](/img/make-a-car/behind.png)

Next, add the following **Script** on the root node:

```js
extends Node2D

@onready var pin1 : PinJoint2D = $PinJoint2D
@onready var pin2 : PinJoint2D = $PinJoint2D2

const SPEED = 6000

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _physics_process(delta: float) -> void:
	var direction := Input.get_axis("ui_left", "ui_right")
	if direction:
		pin1.motor_enabled = true
		pin2.motor_enabled = true
		pin1.motor_target_velocity = direction * SPEED
		pin2.motor_target_velocity = direction * SPEED
	else:
		pin1.motor_enabled = false
		pin2.motor_enabled = false

```

## Try it out

Click the **Run Current Scene** button. If you did everything right, you will see the following:

![gif](/img/make-a-car/result.gif)
