---
sidebar_position: 1
---

# Regions

A softbody is formed out of multiple regions. In order to view the regions, enable the **Draw Regions** checkbox:
![regions](/img/about-regions/regions.png)

The softbodies regions determine in how many parts the softbody will be split into. These regions are generated following a checkers pattern, following the contour of the texture.


:::caution

In case you don't have any region generated, an error has occured with the parameters you selected. The plugin will give an error of what failed, and you will need to update some parameters. More on this at the [Possible Errors](#possible-errors) section.

:::


## Vertex Interval

In case the shape is split into too many parts, it might intersect with other physical elements, or decrease performance. In order to reduce this, you can increase the **Vertex Interval** property and reduce the total number of regions created, and as such the total number of physics objects created.


![add child node](/img/about-regions/less-regions.png)

## Outline generation parameters

The outline of the shape can be viewed by going to the **UV editor**:

![uv editor](/img/about-regions/uv-editor.png)

This outline can be changed by updating some properties from the **SoftBody2D** node.

The **Image** parameters section contains:

- **Exclude Texture**: Set this to a texture of same size as the original texture. The generated outline of this will be used to cut from the initial outline generated, creating a softbody with a hole.
- **Texture Epsilon**: The lower it is the more points the outline will have
- **Min Alpha**: The min amount of alpha to consider solid contents in the texture.
- **Margin Pixels**: This adds a margin to the generated outline.

The **Polygon** parameters section contains:
- **Polygon Offset**: Moves where the center of the checkers pattern is.
- **Margin Offset**: Moves the centers of the regions. This is useful to change the center of the shapes to be closer to the center of the texture.
- **Min Area**: The area of the smallest region to generate. Making this bigger will make sure that there are no small regions generated.

## Possible Errors

### Could not generate polygon outline

In this case the polygon outline generation failed. This plugin uses [bitmap.create_from_image_alpha](https://docs.godotengine.org/en/latest/classes/class_bitmap.html#class-bitmap-method-create-from-image-alpha) from the Godot Engine in order to generate the outline. It could be that the algorithm used either didn't generate any outline from the image provided, or it generated more than 1 outline (eg. 2 outlines).

In case the image might generate no outline, you can try update some of the [Outline generation parameters](#outline-generation-parameters). In case it generates more than 1 outline and you want that, simply split that image in 2 images using an image editing software.

### Too many regions

Inside the script, there is a definition for `MAX_REGIONS := 200`. This error means that more than this number of regions is generated. You can go inside the script and update this number. Be careful though as the editor might freeze if too many are generated.

### Texture is required to generate SoftBody2D

You forgot to set the texture property of the **SoftBody2D** node.