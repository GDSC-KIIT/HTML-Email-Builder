<script lang="ts">
	import type { Button } from '../../utils/Elements';

	export let element: Button;

	$: padding = `padding : ${element.padding.top}px ${element.padding.right}px ${element.padding.bottom}px ${element.padding.left}px`;
	$: fontWeight = `font-weight : ${element.fontWeight}`;
	$: fontSize = `font-size : ${element.fontSize}px`;
	$: textAlign = `text-Align : ${element.textAlign}`;
	$: color = `color : ${element.color}`;
	$: backgroundColor = `background-color : ${element.backgroundColor}`;
	$: borderRadius = `border-radius : ${element.borderRadius}px`;
</script>

<div class="p-1" style={`${color}; ${textAlign}; ${fontSize}; ${fontWeight};`}>
	<button style={`${padding}; ${backgroundColor}; ${borderRadius};`}
		><a href={`https://${element.url}`} target="_blank">{element.content}</a></button
	>
</div>
