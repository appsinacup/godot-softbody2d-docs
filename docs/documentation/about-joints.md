---
sidebar_position: 3
---

# Joints

Each shape of the softbody is connected through joints.

The **Joint** parameters section contains options to either create **PinJoint2D** or **DampedSpringJoint2D** nodes that connect the **RigidBody2D** nodes togheter.

- **Joint Type**: Sets the type of the joint to create. In case **pin** is selected, the **PinJoint** section can be updated also. Similar for the **spring** selection, the **DampedSpringJoint** section is taken into account.
- **Bias**: This is a Godot specific property for joints.
- **Disable Collisions**: Disables collisions between connected rigidbodies.

In the **RigidBody** parameters section there is one option that relates to the joints:
- **Break Distance Ratio**: This is a ratio of when the joint should break. Putting it 0 disables breakable joints. Putting it at 1.5 for example means the joint should break if the two rigidbodies it has are more than 1.5x far away their original distance.

:::note

The break distance ratio is also multiplied by number of connections the rigidbody has. This means a rigidbody that is inside the softbody is less likely to break than a rigidbody from the edge of the shape.

:::

## Pin Joint Parameters

The **PinJoint** parameters section contains parameters related to the **pin** joint:
- **Softness**: If you increase this option, the softbody will be more loose.

## Spring Joint Parameters

The **DampedSpringJoint** parameters section contains parameters related to the **spring** joint:
- **Stiffness**: Increase this property to make the softbody less squishy.
- **Damping**: Increasing this will make the softbody reach the initial state faster, making it less loose.
- **Rest Length Ratio** and **Length Ratio**: Control the rest length and length properties of the spring joint.
